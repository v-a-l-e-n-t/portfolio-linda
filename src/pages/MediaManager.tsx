import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MediaUpload from "@/components/admin/MediaUpload";
import MediaList from "@/components/admin/MediaList";

const MediaManager = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Gestion des Médias
          </h1>
          <p className="text-muted-foreground">
            Importez et gérez vos vidéos, audios et images
          </p>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="videos">Vidéos</TabsTrigger>
            <TabsTrigger value="audios">Audios</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-8">
            <MediaUpload mediaType="video" />
            <MediaList mediaType="video" />
          </TabsContent>

          <TabsContent value="audios" className="space-y-8">
            <MediaUpload mediaType="audio" />
            <MediaList mediaType="audio" />
          </TabsContent>

          <TabsContent value="images" className="space-y-8">
            <MediaUpload mediaType="image" />
            <MediaList mediaType="image" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MediaManager;