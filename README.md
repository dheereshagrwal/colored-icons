# Colored Icons

Sample icons

<img src="./svg/spotify.svg" alt="Spotify Icon" width="48" height="48"> <img src="./svg/reactjs.svg" alt="React Icon" width="48" height="48">
<img src="./svg/vuejs.svg" alt="Vue.js Icon" width="48" height="48"> <img src="./svg/redis.svg" alt="Redis Icon" width="48" height="48"> <img src="./svg/firebase.svg" alt="Firebase Icon" width="48" height="48"> <img src="./svg/instagram.svg" alt="Instagram Icon" width="48" height="48"> <img src="./svg/python.svg" alt="Python Icon" width="48" height="48"> <img src="./svg/js.svg" alt="JavaScript Icon" width="48" height="48"> <img src="./svg/html.svg" alt="HTML5 Icon" width="48" height="48"> <img src="./svg/css.svg" alt="CSS3 Icon" width="48" height="48"> <img src="./svg/nodejs.svg" alt="Node.js Icon" width="48" height="48"> <img src="./svg/mongodb.svg" alt="MongoDB Icon" width="48" height="48"> <img src="./svg/postgresql.svg" alt="PostgreSQL Icon" width="48" height="48"> <img src="./svg/java.svg" alt="Java Icon" width="48" height="48"> <img src="./svg/angular.svg" alt="Angular Icon" width="48" height="48"> <img src="./svg/nuxtjs.svg" alt="Nuxtjs Icon" width="48" height="48"> <img src="./svg/github-light.svg" alt="GitHub Icon" width="48" height="48"> <img src="./images/docker.webp" alt="Docker Icon" width="48"> <img src="./svg/kubernetes.svg" alt="Kubernetes Icon" width="48" height="48">

Throw in a CDN and watch the magic happen! Don't bother with all that `npm` stuff, just use the easy `<i>` tag. It's a bunch of logos from different brands and tech stacks. You can just slap those awesome icons onto your projects without ever dealing with all that boring attribution.

## Demo

To see the demo of some of the icons, just visit [Colored Icons Library Demo](https://dheereshagrwal.github.io/colored-icons/). If you wish to see all the icons available yourself, you can open `svg` and `images` folder.

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
  href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.6.4/ci.min.css"
/>
```

the tag `1.6.4` refers to the release version, I will update the readme as soon as I add a few more icons, so you can just always copy it.

## Usage

```
<i class="ci ci-spotify ci-2x"></i>
```
<img src="./svg/spotify.svg" width="32px">

```
<i class="ci ci-git ci-md"></i>
```
<img src="./svg/git.svg" width="16px">

```
<i class="ci ci-nuxtjs ci-5x"></i>
```
<img src="./svg/nuxtjs.svg" width="80px">

```
<i class="ci ci-azure ci-sm"></i>
```
<img src="./svg/azure.svg" width="14px">

```
<i class="ci ci-redis ci-3x"></i>
```
<img src="./svg/redis.svg" width="48px">


## Inverting the color

If you want to invert the color for some reason, just add `ci-invert`.

```
<i class="ci ci-highonswift ci-2x ci-invert"></i>
```

## Sizing

I used the same sizing style used by font awesome:

`ci-2xs` `ci-xs` `ci-sm` `ci-md` `ci-lg` `ci-xl` `ci-2xl`

<img src='./svg/discord.svg' width="10px"> <img src='./svg/discord.svg' width="12px"> <img src='./svg/discord.svg' width="14px"> <img src='./svg/discord.svg' width="16px"> <img src='./svg/discord.svg' width="20px"> <img src='./svg/discord.svg' width="24px"> <img src='./svg/discord.svg' width="32px">


`ci-1x` `ci-2x` `ci-3x` `ci-4x` `ci-5x` `ci-6x` `ci-7x` `ci-8x` `ci-9x` `ci-10x`

<img src="./svg/discord.svg" width="16px"> <img src="./svg/discord.svg" width="32px"> <img src="./svg/discord.svg" width="48px"> <img src="./svg/discord.svg" width="64px"> <img src="./svg/discord.svg" width="80px"> <img src="./svg/discord.svg" width="96px"> <img src="./svg/discord.svg" width="112px"> <img src="./svg/discord.svg" width="128px"> <img src="./svg/discord.svg" width="144px"> <img src="./svg/discord.svg" width="160px">


For more details about the sizing, you can refer to this [Font Awesome Icon Size Documentation](https://fontawesome.com/docs/web/style/size)

## Dark and Light icons

By default, the `ci-nextjs` will refer to the dark version of the logo which means that you have to use it on a light background, you can also write `ci-nextjs-dark` for the same.
Just don't write `ci-nextjs ci-dark`, dark is not some class that can be applied to colored icons.

`ci-nextjs`

<img src="./svg/nextjs-dark.svg" width="48px">

Similarly, `ci-nextjs-light` refers to the light version of the icon which means that you have to use it on a dark background.
Note that not every brand has dark and/or light icons

<img src="./svg/nextjs-light.svg" width="48px">

## Horizontal (Inline), Vertical (Stacked), and Wordmark icons

`ci-infura-wordmark` refers to the wordmark icon of the brand. If you don't understand what it means, you can refer to this [Infura Press Kit](https://www.infura.io/presskit)

<img src="./svg/infura-wordmark.svg" alt="Infura Wordmark" width="96">

`ci-whatsapp-horizontal` or `ci-whatsapp-inline` refers to the horizontal/inline icon with the logo on the left and wordmark on the right.

<img src='./svg/whatsapp-horizontal.svg' alt="Whatsapp Horizontal" width="96">

Similarly, `ci-whatsapp-vertical` or `ci-whatsapp-stacked` refers to the vertical/stacked icon with the logo on top and wordmark on the bottom. If you wish to know more about the naming convention, refer to this [Alan Brand Assets](https://alan.app/brand-assets/).

Note that not every brand has horizontal and/or vertical icons.

<img src='./svg/whatsapp-vertical.svg' alt="Whatsapp Vertical" width="96">

## Second version

Some icons have a second version of them provided which is a darker shade of the original such as

`ci ci-mongodb2`

<img src="./svg/mongodb2.svg" alt="MongoDB2 Icon" width="48" height="48">

`ci ci-mongodb`

<img src="./svg/mongodb.svg" alt="MongoDB Icon" width="48" height="48">

## Google fonts

I also added some Google fonts in the CSS file. You can just add a class `font-inter` `font-poppins` `font-karla` `font-dm-sans` `font-lato` `font-dancing-script` `font-pacifico` `font-nunito` `font-rubik` `font-epilogue` `font-sora` `font-montserrat` to your existing class and the text will be changed. Enjoy!

## Contribution

The code is very lightweight and dead simple; there is nothing fancy going on.
If you want me to add an icon that is missing or have some suggestions, just raise an issue

## License

The Colored Icons Library is licensed under the MIT License. Please review the license file for more details.

## Contact

[Visit my personal website](https://dheereshagrwal.vercel.app)
