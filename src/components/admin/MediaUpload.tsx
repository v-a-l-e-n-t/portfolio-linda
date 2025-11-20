import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  { value: "festival-arts-feminin-2025", label: "Festival des arts au féminin 2025" },
  { value: "festival-arts-feminin-2023", label: "Festival des arts au féminin 2023" },
  { value: "journee-porte-ouverte-yiri", label: "Journée porte ouverte - Centre Yiri" },
  { value: "mariage", label: "Animation de mariage" },
  { value: "webday-2025", label: "Modération Webday 2025" },
  { value: "webday-2024", label: "Webday 2024" },
  { value: "causerie-debat-2025", label: "Causerie débat - Fondation Jocelyne Silue" },
  { value: "diner-gala-ascens", label: "Dîner gala Ascens" },
  { value: "concert-mierevi", label: "Concert MIEREVI" },
  { value: "cadrage", label: "Activité de cadrage" },
  { value: "jeune-chambre", label: "Jeune Chambre Internationale" },
  { value: "autres", label: "Autres" },
];

interface MediaUploadProps {
  mediaType: "video" | "audio" | "image";
}

const MediaUpload = ({ mediaType }: MediaUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const getBucketName = () => {
    switch (mediaType) {
      case "video": return "videos";
      case "audio": return "audios";
      case "image": return "images";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file || !title) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setUploading(true);

    try {
      const bucket = getBucketName();
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase.from("media").insert({
        title,
        description,
        media_type: mediaType,
        file_path: publicUrl,
        category: category || null,
        duration: duration ? parseInt(duration) : null,
      });

      if (dbError) throw dbError;

      toast.success(`${mediaType} uploadé avec succès !`);
      
      // Reset form
      setTitle("");
      setDescription("");
      setCategory("");
      setDuration("");
      setFile(null);
      const fileInput = document.getElementById("file-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";

    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Uploader un {mediaType}</CardTitle>
        <CardDescription>
          Ajoutez un nouveau {mediaType} à votre portfolio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-upload">Fichier *</Label>
            <Input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept={
                mediaType === "video" ? "video/*" :
                mediaType === "audio" ? "audio/*" :
                "image/*"
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Titre *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre du média"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description du média"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Sélectionnez une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {mediaType !== "image" && (
              <div className="space-y-2">
                <Label htmlFor="duration">Durée (secondes)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="60"
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={uploading} className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            {uploading ? "Upload en cours..." : "Uploader"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MediaUpload;