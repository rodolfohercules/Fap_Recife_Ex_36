class Computador {
    // Método construtor da classe
    constructor(hardware) {
        this.hardware = hardware;
    }

    // Método de instância
    desligar() {
        console.log(`Olá, salve seus documentos pois estou desligando...${this.hardware}`);
    }

    // Método estático
    static formatar() {
        console.log("Este é o modo de restaurar o sistema.");
    }
}

// Criando uma instância da classe
const upgrade = new Computador("Dell");

// Chamando o método de instância
upgrade.desligar();

// Chamando o método estático da classe
Computador.formatar();
