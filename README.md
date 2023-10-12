🌱

This is a small project to create a simple web interface that helps me create pixel art. The idea is simple: it's just a web app where I can create pixel art and then export it for use in other projects.

I want to keep it extremely simple. For now, I'm focusing on one-color drawings and avoiding functionality outside the drawing itself. Also, the idea is to learn about Solid.js, so I need to review the code from time to time and improve the architecture.

The project is currently live here: https://svg-drawer-rouge.vercel.app/

NEW!
Nicer interaction with the canvas in desktop.

NEXT STEPS:
0. Add the ability to draw by draggin the cursor or touch.
1. Tech-deb checkpoint
  1.1 Re organice the code based in the new experiences.
  1.2 Share state in preparation for the save feature.
  1.3 Why only the affected div is changing? I thoug worked diferently.
  1.1 Share state in preparation for the save feature. ContextAPI? Redux?
2. Save feature
  2.1 Save current drawing to local storage
  2.2 Explore saved drawings
  2.3 Load save drawing
  2.3 Ask for saving current unsaved drawing before loading the stored one.
--------------------------------------------------------------------------
3. Add colors, think about getting colors from lospec.