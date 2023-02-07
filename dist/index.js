import { renderSearchFormBlock } from "./search-form";
import { renderSearchStubBlock } from "./search-results";
import { renderUserBlock } from "./user";
import { renderToast } from "./lib";
if (typeof window !== undefined && window && window.addEventListener) {
    window.addEventListener("DOMContentLoaded", () => {
        renderUserBlock("0");
        renderSearchFormBlock();
        renderSearchStubBlock();
        renderToast({
            text: "Это пример уведомления. Используйте его при необходимости",
            type: "success",
        }, {
            name: "Понял",
            handler: () => {
                console.log("Уведомление закрыто");
            },
        });
    });
}
else {
    console.log("This is not browser!");
}
