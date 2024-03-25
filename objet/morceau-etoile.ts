class morceauetoile {
    name = "morceau-etoile";
    resurrect = 0;
    pvmax = 0;
    pvcurrent = 0;

    constructor(name: string,pvmax: number, pvcurrent: number) {
        this.name = name;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }

    use() {
        if (this.pvcurrent === 0) {
            this.pvcurrent = Math.round(this.pvmax * 0.2);
        } else {
            this.pvcurrent += Math.round(this.pvcurrent * 0.5);
            if (this.pvcurrent > this.pvmax) {
                this.pvcurrent = this.pvmax;
            }
        }
    }
}

export default morceauetoile;