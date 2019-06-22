# My static file
This is my personal web, but still construct.
## Architecture
```
|- base/
|
|- components/
|
|- helpers/
|
|- layout/
|
|- pages/
|
|- static/
|   |- main.css
|
|- main.scss
```
## Instruction
Compile SCSS file
```
sass --watch ./main.scss ./static/main.css
```


#### Base
> the boilerplate stuff in the project
##### reset.scss
##### typography.scss
#### Components
> all kinds of small components
#### Helper
> the tools or helpers we will use across the project.
##### mixin.scss
##### variable.scss
#### Layout
> each of them setting some styles for the main section of the layout
##### header.scss
#### Pages
> page-specific styles file.Only compiled for the specificed page
#### Static
> output dir for the css file
##### main.css

