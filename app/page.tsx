"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const threejsDemos = [
  {
    label: "Animation Keyframes",
    value: "webgl_animation_keyframes.html",
    url: "https://threejs.org/examples/webgl_animation_keyframes.html",
  },
  {
    label: "Skinning Blending",
    value: "webgl_animation_skinning_blending.html",
    url: "https://threejs.org/examples/webgl_animation_skinning_blending.html",
  },
  {
    label: "IK Animation",
    value: "webgl_animation_skinning_ik.html",
    url: "https://threejs.org/examples/webgl_animation_skinning_ik.html",
  },
  {
    label: "Walking Animation",
    value: "webgl_animation_skinning_morph.html",
    url: "https://threejs.org/examples/webgl_animation_skinning_morph.html",
  },
  {
    label: "Car Material",
    value: "webgl_materials_car.html",
    url: "https://threejs.org/examples/webgl_materials_car.html",
  },
  {
    label: "Water Surface",
    value: "webgl_shaders_ocean.html",
    url: "https://threejs.org/examples/webgl_shaders_ocean.html",
  },
  {
    label: "Refraction Shader",
    value: "webgl_materials_cubemap_refraction.html",
    url: "https://threejs.org/examples/webgl_materials_cubemap_refraction.html",
  },
  {
    label: "Environment Map",
    value: "webgl_materials_envmaps.html",
    url: "https://threejs.org/examples/webgl_materials_envmaps.html",
  },
  {
    label: "Particle Fireball",
    value: "webgl_points_sprites.html",
    url: "https://threejs.org/examples/webgl_points_sprites.html",
  },
  {
    label: "Galaxy Simulation",
    value: "webgl_buffergeometry_custom_attributes_particles.html",
    url: "https://threejs.org/examples/webgl_buffergeometry_custom_attributes_particles.html",
  },
  {
    label: "Depth of Field (DOF)",
    value: "webgl_postprocessing_dof.html",
    url: "https://threejs.org/examples/webgl_postprocessing_dof.html",
  },
  {
    label: "Video Texture",
    value: "webgl_materials_video.html",
    url: "https://threejs.org/examples/webgl_materials_video.html",
  },
  {
    label: "Morph Targets Horse",
    value: "webgl_morphtargets_horse.html",
    url: "https://threejs.org/examples/webgl_morphtargets_horse.html",
  },
  {
    label: "Shader Lava",
    value: "webgl_shaders_lava.html",
    url: "https://threejs.org/examples/webgl_shaders_lava.html",
  },
  {
    label: "Skinning Simple",
    value: "webgl_animation_skinning.html",
    url: "https://threejs.org/examples/webgl_animation_skinning.html",
  },
]

export default function Home() {
  const [selectedDemo, setSelectedDemo] = useState<string>("")
  const selectedDemoData = threejsDemos.find((demo) => demo.value === selectedDemo)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Explore Model genrated by Zerora model </CardTitle>
              <CardDescription>Select a demo from the dropdown to view interactive model generated </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="demo-select" className="text-sm font-medium">
                  Choose a 3D Demo
                </label>
                <Select value={selectedDemo} onValueChange={setSelectedDemo}>
                  <SelectTrigger id="demo-select">
                    <SelectValue placeholder="Select a Three.js demo..." />
                  </SelectTrigger>
                  <SelectContent>
                    {threejsDemos.map((demo) => (
                      <SelectItem key={demo.value} value={demo.value}>
                        {demo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedDemoData && (
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border">
                    <iframe
                      src={selectedDemoData.url}
                      width="100%"
                      height="500"
                      style={{ border: "none" }}
                      title={selectedDemoData.label}
                      className="w-full"
                    />
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    generatedmodel examples via iframe • Made with ❤️by sreejith
                  </div>
                </div>
              )}

              {!selectedDemo && (
                <div className="text-center py-12 text-muted-foreground">
                  <div className="text-6xl mb-4">🎮</div>
                  <p>Select a model above to start exploring!</p>
                   <p>Made possible thanks to open source threejs resoruce</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
