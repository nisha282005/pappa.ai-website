# Home hero: walking videos (production brief)

Four clips, one per role, each in a light and a dark version (8 files). In each clip one character walks away from the camera, through a large archway, towards the school. The website places the headline and role card over the clip, so **the video must contain no text, cards, buttons or app badges.**

## Delivery

| Slide | Light file | Dark file |
|---|---|---|
| Student | `student-light.mp4` | `student-dark.mp4` |
| Teacher | `teacher-light.mp4` | `teacher-dark.mp4` |
| Parent | `parent-light.mp4` | `parent-dark.mp4` |
| Admin | `admin-light.mp4` | `admin-dark.mp4` |

- Folder: `public/videos/hero/`
- 16:9, 1920×1080, H.264 MP4, no audio, **4 seconds**, under ~2 MB each
- Also export the **first frame** of each clip as a `.jpg` (same name) into `public/images/hero/carousel/`. That frame is shown while the video loads, and to visitors who turn off motion.

## Keep all 8 consistent

1. **Make one scene first.** Generate a single still of the empty archway and school, in light and dark. Every clip starts from it, so the school, archway and camera angle never change between slides.
2. **Make each character's keyframe** by adding that character into the scene still (an image edit), standing in the archway with their back to the camera.
3. **Animate each keyframe** with image-to-video, using the motion prompt below.
4. **Make the dark version** by editing the light keyframe ("same scene at dusk") before animating. Don't generate it from scratch.

## Design system colours to match

| Use | Light theme | Dark theme |
|---|---|---|
| Page background (the frame's left edge fades into this) | `#F8F7FF` | `#0B0F19` |
| Brand accent (backpack logo, banner, sky tint) | `#4F46E5` indigo | `#818CF8` indigo |
| Secondary accent (glow, sky) | `#7C3AED` violet | `#A855F7` violet |

## Shared scene prompt (use for every keyframe)

> Stylized 3D animated film look, soft cinematic lighting. Wide 16:9 shot. In the foreground, a large smooth concrete circular archway, slightly right of centre. Through the arch: a modern two-storey white school building with large windows, green trees, a paved courtyard, and a small indigo banner with a white letter "P" on a pole. A few students in navy-and-white uniforms in the distance. Glossy stone floor with soft reflections. **The left 40% of the frame is calm and empty**: plain wall and floor, no people or objects, fading softly into [LIGHT: pale lavender-white #F8F7FF] / [DARK: deep navy #0B0F19]. No text, no logos except the "P", no UI.

**Light lighting:** bright morning sun from the right, soft blue sky with light lavender clouds, airy and fresh.
**Dark lighting:** golden-hour dusk, sky from indigo to violet to warm orange near the horizon, warm lights in the school windows, a soft violet glow on the archway.

## Characters (match the people already on the site)

Each is seen **from behind, full body**, standing just inside the archway at the start.

- **Student:** a boy of about 12 in a white short-sleeve shirt, navy trousers and white sneakers, with a navy backpack showing a small glowing indigo "P".
- **Teacher:** a woman in her 30s in a cream saree with a green border and a blue lanyard, hair in a low bun, carrying a tablet against her side.
- **Parent:** a woman in a peach printed kurta with a white dupatta, **holding the hand of a young girl** (about 6) in a navy-and-white school uniform with a small backpack.
- **Admin:** a man in his 50s with grey hair, in a navy suit, carrying a slim folder.

## Motion prompt (image-to-video, 4 seconds)

> The [CHARACTER] walks calmly forward, away from the camera, through the archway towards the school entrance, with a natural relaxed stride. The camera stays locked off with a very slight slow push-in. The background people move subtly. Leaves sway gently. Lighting stays constant. The character stays right of centre and never enters the left 40% of the frame. No cuts, no text, no camera shake.

- **Parent:** "…walks hand in hand with the child, glancing down at her once…"
- **Admin:** "…walks with a confident, unhurried pace…"

## Quality check before you hand off

- [ ] Same archway, school and camera angle in all 8 clips
- [ ] Left side of the frame is calm and empty (the headline sits there)
- [ ] No text, captions, watermarks or UI in the video
- [ ] Faces and hands look natural, with no extra fingers or warping
- [ ] Exactly ~4 s long, with no audio track
- [ ] The light and dark versions of each character match (same outfit and position)
