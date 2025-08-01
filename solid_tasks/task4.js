class Printer {
    print(doc) {
        throw new Error("print() must be implemented");
    }
}

class Fax {
    fax(doc) {
        throw new Error("fax() must be implemented");
    }
}

class Scanner {
    scan(doc) {
        throw new Error("scan() must be implemented");
    }
}

class OldPrinter extends Printer {
    print(doc) {
        console.log("Printing:", doc);
    }
}

class ModernPrinter extends Printer {
    print(doc) {
        console.log("Printing:", doc);
    }
}

class ModernPrinterFax extends Fax {
    fax(doc) {
        console.log("Faxing:", doc);
    }
}

class ModernPrinterScanner extends Scanner {
    scan(doc) {
        console.log("Scanning:", doc);
    }
}

const oldPrinter = new OldPrinter();
oldPrinter.print("Document A");

const modernPrinter = new ModernPrinter();
const modernFax = new ModernPrinterFax();
const modernScanner = new ModernPrinterScanner();

modernPrinter.print("Document B");
modernFax.fax("Document B");
modernScanner.scan("Document B");   
