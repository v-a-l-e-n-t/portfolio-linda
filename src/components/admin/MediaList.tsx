import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface MediaListProps {
  mediaType: "video" | "audio" | "image";
}

interface Media {
  id: string;
  title: string;
  description: string | null;
  file_path: string;
  category: string | null;
  duration: number | null;
  created_at: string;
}

const MediaList = ({ mediaType }: MediaListProps) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, [mediaType]);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from("media")
        .select("*")
        .eq("media_type", mediaType)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMedia(data || []);
    } catch (error: any) {
      console.error("Error fetching media:", error);
      toast.error("Erreur lors du chargement des médias");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, filePath: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce média ?")) return;

    try {
      const bucket = mediaType === "video" ? "videos" : mediaType === "audio" ? "audios" : "images";
      const fileName = filePath.split("/").pop();

      if (fileName) {
        const { error: storageError } = await supabase.storage
          .from(bucket)
          .remove([fileName]);

        if (storageError) console.error("Storage deletion error:", storageError);
      }

      const { error: dbError } = await supabase
        .from("media")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      toast.success("Média supprimé avec succès");
      fetchMedia();
    } catch (error: any) {
      console.error("Delete error:", error);
      toast.error("Erreur lors de la suppression");
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">Chargement...</div>;
  }

  if (media.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          Aucun {mediaType} pour le moment
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        Médias existants ({media.length})
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              {mediaType === "image" && (
                <img
                  src={item.file_path}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}
              
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              
              {item.description && (
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {item.description}
                </p>
              )}
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                {item.category && (
                  <span className="bg-secondary px-2 py-1 rounded">{item.category}</span>
                )}
                {item.duration && (
                  <span>{item.duration}s</span>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(item.file_path, "_blank")}
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Voir
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(item.id, item.file_path)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MediaList;