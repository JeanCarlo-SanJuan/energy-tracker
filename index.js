class Energy{
    min = 0
    max = 10
    energyInterval = 2
    constructor(val, elem) {
        this.val = val;
        this.elem = elem;
        this.update(val)
    }

    update(v = this.val) {
        this.val = Math.min(Math.max(v, this.min), this.max);
        this.elem.innerText = this.val;
    }

    next() {
        this.val += this.energyInterval;
    }

    increment(isPositive = true) {
        let v = this.val;
        if (isPositive)
            v++
        else
            v--
        this.update(v)
    }
}

const tracker = new Energy(0, $("#count"));
const [reset, next, minus, count, plus] = 
$("#reset", "#next", "#minus", "#count", "#plus");

reset.addEventListener("click", e => tracker.update(0));

next.addEventListener("click" , e => {
    tracker.next()
    tracker.update()
})

plus.addEventListener("click", e=> {
    tracker.increment()
})

minus.addEventListener("click", e => {
    tracker.increment(false)
})