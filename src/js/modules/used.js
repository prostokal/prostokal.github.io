export function fillLines(percent, line) {

    const counters = document.querySelectorAll(percent),
        lines = document.querySelectorAll(line);

    counters.forEach( (item, i)=> {
        lines[i].style.width = item.innerHTML;
    });
}