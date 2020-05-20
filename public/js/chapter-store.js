export default class ChapterStore {

    store = {};

    constructor(chapterCount) {
        this.storeChaptersFromFolder(chapterCount);
    }

    storeChaptersFromFolder(total) {
        for (let i = 1; ; i++) {
            try {
                let str = this.loadMarkdownStr(this.getChapterFilePath(i));
                let split = str.split("~");
                this.store[i] = marked(split[1]);
                let self = this;
                let navbar = document.getElementById("navbar");
                let btn = document.createElement("button");
                btn.innerHTML = split[0];
                btn.addEventListener("click", () => {
                    for (let e of navbar.children) {
                        e.style.backgroundColor = "transparent";
                        e.style.color = "white";
                    }
                    document.getElementById("main").innerHTML = self.store[i];
                    btn.style.backgroundColor = "white";
                    btn.style.color = "black";
                });
                navbar.appendChild(btn);
            } catch (e) {
                break;
            }
        }
    }

    getChapterFilePath(index) {
        return `public/res/chapters/ch${index}.md`;
    }

    loadMarkdownStr(filePath) {
        return $.ajax({
            url: filePath,
            async: false
        }).responseText;
    }
}