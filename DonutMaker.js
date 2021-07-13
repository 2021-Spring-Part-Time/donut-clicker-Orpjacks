class DonutMaker {
    constructor(numDonuts, numAutoClickers, numDonutMultipliers) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numDonutMultipliers = numDonutMultipliers;


    }
    addDonut() {
        this.numDonuts++;

    }
    addAutoClicker() {
        if (this.numDonuts >= 10) {
            this.numAutoClickers++;
            this.numDonuts -= 10;
        }
    }


    reset() {

        location.reload();
        
        
    }

    addMultipliers() {
        this.numDonutMultipliers += 1

    }


    activateAutoClickers() {
        if (this.numAutoClickers > 0) {
            this.numDonuts += this.numAutoClickers
        }
    }
    getDonutsPerClick() {

        return Math.pow(1.2, this.numDonutMultipliers)
    }
}

export default DonutMaker;