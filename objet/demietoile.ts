class demietoile {
    name = "demi-etoile";
    pvmax = 0;
    pvcurrent = 0;

    constructor(name: string, pvmax: number, pvcurrent: number) {
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }

    resuscitate() {
        this.pvcurrent = this.pvmax;
    }
}

export default demietoile