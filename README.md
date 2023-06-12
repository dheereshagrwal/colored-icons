
# Colored Icons Library

The Colored Icons Library is a collection of brand logos and tech stack logos. It's a handy resource to easily add brand icons to your projects without the hassle of manual attribution.

## Features
- Super easy integration into your web projects using the `<i>` tag
- Change the size of icons, just like Font Awesome icons
- Flip the colors of icons using the `ci-invert` class

## Why I Made This Library
After becoming frustrated with Flaticon's constant demand for credit, I decided to create this collection. To do this, I went to the respective company websites and saved the logo files. There is no longer any need to provide credit or download unnecessary logos in order to use these icons.

## Installation

To use the Colored Icons Library, simply add the following CDN link to your HTML file:
```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.5.6/ci.css"
/>
```
the tag `1.5.6` refers to the release version, I will be update the readme as soon as I add a few more icons, so you can just always copy it.
## Usage
`<i class="ci ci-spotify ci-2x"></i>`

`<i class="ci ci-git ci-md"></i>`

`<i class="ci ci-leetcode ci-5x"></i>`

`<i class="ci ci-discord ci-sm"></i>`

`<i class="ci ci-redis ci-3x"></i>`

## Inverting the color
If the light logo isn't provided by the brand but you'd like to use it anyway, just add ci-invert.

`<i class="ci ci-highonswift ci-2x ci-invert"></i>`

## Sizing
I used the same sizing style used by fontawesome:

`ci-2xs` `ci-xs` `ci-sm` `ci-lg` `ci-xl` `ci-2xl`

`ci-1x` `ci-2x` `ci-3x` `ci-4x` `ci-5x` `ci-6x` `ci-7x` `ci-8x` `ci-9x` `ci-10x`

For more details about the sizing, you can refer to this [Font Awesome Icon Size Documentation](https://fontawesome.com/docs/web/style/size)

## Dark and Light icons
By default, the `ci-nextjs` will refer to the dark version of the logo which means that you have to use on light background.
You can also write `ci-nextjs-dark` it means that dark version of the icon, don't do `ci-nextjs ci-dark`, dark is not some class that can be applied on colored icons.
Similarly, `ci-nextjs-light` refers to the light version of the icon which means that you have to use it on a dark background.

## Contribution
Code is very lightweight and dead simple; it has obviously nothing fancy going on.
If you want me to add an icon that is missing or have some suggestions, just raise an issue

## License
The Colored Icons Library is licensed under the MIT License. Please review the license file for more details.

## Google fonts
I also added some google fonts in the css file. You can just add a class `font-inter` `font-poppins` `font-karla` `font-dm-sans` `font-lato` `font-dancing-script` `font-pacifico` `font-nunito` `font-rubik` to your existing class and the text will be changed. Enjoy!

