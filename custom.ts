//% color="#e6ac00" icon="" block="Menu"
namespace menu {

    //% block="Add system menu option $name icon $image function:"
    //% handlerStatement=1
    //% image.shadow=screen_image_picker
    export function addmenuoption(name: string, image: Image, handler: () => void): void {
        scene.systemMenu.addEntry(() => name, handler, image);

    }
}