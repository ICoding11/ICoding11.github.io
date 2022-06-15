const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "emeraudeTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "emeraude":
                document.body.classList.add("emeraudeTheme");
                break;
            case "yellow":
                document.body.classList.add("yellowTheme");
                break;
            default:
                null;
        }
    })
})