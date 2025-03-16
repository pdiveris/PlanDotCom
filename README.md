<p align="center"><a href="https://laravel.com" target="_blank">
<img src="VideoGrid.png" width="800" alt="VideoGrid"></a></p>


## VideoGrid

VideoGrid is a simple video grid component with play / autoplay / preview image functionality. 
Both the Grid and the Player are React based and responsive. It has been built with

- [Laravel 12](https://laravel.com/docs/12.x/releases)
- [React 18](https://react.dev/blog/2022/03/29/react-v18)
- [Tailwind 4 CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- HTML5 Video

In addition, it makes use of [Docker](http://docker.io) through Laravel Sail

## How to run
Simply clone the rep into a folder, change dir to, e.g. `cd ./videogrid` and run `./vendor/bin/sail up`.
You should now be able to see it in your browser at http://127.0.0.1

### API
You can access the videos API at `http://127.0.0.1/api/videos?q=himself` where q is your query string against title and/or description.

## Prerequisites
- PHP 8.3+
- Docker

## NOTES
- I originally set to use react-player. Because of the notes I thought that I'd have to customize the controls of the player, i.e. remove all controls 
but the volume ones, so I swapped to native Video HTML5. This got eventually working, but after I realised that I didn't need to remove all controls.
- Nevertheless, that was a god change as it allowed for hover/blur controls.
- There is a Dark/Light switcher. It was added to learn the Tailwind CSS4 way of doing it. It's imperfect in the sense that I have nt created custom themes, just using the Tailwind CSS selectors. 
Also,it won't store the preference to **localStore**. It means that if you reload the app, it will revert to light. 
- No https has been configured for the purpose of this exercise.
- I ~~will~~ use Axios to feed React, but in all truth I shouldn't need to, it'd be faster to just use Laravel Blade.
- I have just noticed some duplicates, e.g. "The first Blender Open Movie from 2006" with an `isLive` status set to true and false respectively (ID's 7 and 8). 

## KNOWN ISSUES
- When hovering over using **Firefox**, if one moves to the Volume controls to enable sound and then leaves, the video stops. That's due to Mozilla's implementation of the Video element. I can think f a fix, but I've run out of time.
- I don't like the `startPreview`, `endPreview` legacy JS code in the `.ts` file. They should be in a provider. However, I had issues getting this to work, and I'd run out of time. I can elaborate if we discuss ver a call. 

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
