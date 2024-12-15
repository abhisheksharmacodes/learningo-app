function count_w (str) {
    let count = 0
    str.split("").forEach(element => {
        if (element==='w')
            count++
    });
    return count
}

console.log(count_w(`swwsqwws`))