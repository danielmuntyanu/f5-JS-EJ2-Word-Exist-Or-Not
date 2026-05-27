export function wordExist (word) {
    if (!word) {return false};
    const wordLowerCase = word.toLowerCase();
    const goal = "english";

    let curIdx = 0;

    for (let l of wordLowerCase) {
        if (l === goal.at(curIdx)) {
            curIdx += 1;
        } else {
            curIdx = 0;
        }

        if (curIdx === goal.length) {return true};
    }
    return false;
    
}