class MG1 {
    constructor(lambda, mu, sigma) {
        this.lambda = lambda;
        this.mu = mu;
        this.sigma = sigma;
    }
    capacidad() {
        if (this.ro() < 1)
            return "si";
        return "no";
    }
    ro() {
        return this.lambda / this.mu;
    }
    p0() {
        return 1 - (this.lambda / this.mu);
    }
    Lq() {
        return (((Math.pow(this.lambda, 2)) * (Math.pow(this.sigma, 2))) + (Math.pow((this.lambda / this.mu), 2))) / (2 * (1 - (this.lambda / this.mu)));
    }
    L() {
        return this.Lq() + (this.lambda / this.mu);
    }
    Wq() {
        return this.Lq() / this.lambda;
    }
    W() {
        return this.Wq() + (1 / this.mu);
    }
    Pw() {
        return this.lambda / this.mu;
    }
}
