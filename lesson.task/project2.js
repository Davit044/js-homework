class GameOperations {

    constructor() {
        if (new.target === GameOperations) {
            throw new Error("Abstract class");
        }
    };

    calculateRevenue() {
        throw new Error("Abstract method");
    };

    patchUpdates(notes) {
        throw new Error("Absract method");
    };

};

class Game extends GameOperations {

    constructor(name, genre, releaseDate, developer, publisher) {
        super();
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.publisher = publisher;
        this.patches = [];
    };

    getInfo() {
        console.log(`Game's name is ${this.name};
                     Genre is ${this.genre};
                     The date of release - ${this.releaseDate};
                     Developer is ${this.developer.name};
                     Publisher is ${this.publisher ? this.publisher.name : "Not published"}; `);
    };

};

class ActionGame extends Game {

    constructor(name, genre, releaseDate, developer, publisher, violenceLevel, isMultiplayer) {
        super(name, genre, releaseDate, developer, publisher);
        this.violenceLevel = violenceLevel;
        this.isMultiplayer = isMultiplayer;
    }

    getInfo() {
        super.getInfo();
        console.log(`violenceLevel - ${this.violenceLevel};
                     Is it multiplayer ${this.isMultiolayer};`);
    };

    calculateRevenue(pricePerUnit) {
        if (!this.unitsSold) return 0;
        return this.unitsSold * pricePerUnit;
    };

    patchUpdates(notes) {
        this.patches.push(notes);
        console.log(`Patch added: ${notes}`);
    };

    showPatches() {
        console.log("Patches history:", this.patches);
    };

};

class StrategyGame extends Game {

    constructor(name, genre, releaseDate, developer, publisher, mapType, turnBased) {
        super(name, genre, releaseDate, developer, publisher);
        this.mapType = mapType;
        this.turnBased = turnBased;
    };

    getInfo() {
        super.getInfo();
        console.log(`maptype - ${this.mapType};
                     turnBased - ${this.turnBased}; `)
    };

    calculateRevenue(pricePerUnit) {
        if (!this.unitsSold) return 0;
        return this.unitsSold * pricePerUnit;
    };

    patchUpdates(notes) {
        this.patches.push(notes);
        console.log(`Patches added: ${notes}`);
    };

    showPatches() {
        console.log("Patches history:", this.patches);
    };

};

class Developer {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.gamesDeveloped = [];
    };

    createGame(title, genre, releaseDate, type, extra1, extra2) {
        let game;
        if (type === "ActionGame") {
            game = new ActionGame(title, genre, releaseDate, this, null, extra1, extra2);
        } else if (type === "StrategyGame") {
            game = new StrategyGame(title, genre, releaseDate, this, null, extra1, extra2);
        }
        this.gamesDeveloped.push(game);
        return game;
    }


    listGames() {
        return this.gamesDeveloped.map(g => g.name).join(", ");
    };

    updateGameTitle(game, newTitle) {
        return game.name = newTitle;
    };

};

class Publisher {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.gamesPublished = [];
        this.salesMap = new Map();
    };

    publishGame(game) {
        game.publisher = this;
        this.gamesPublished.push(game);
    };

    listReleases() {
        return this.gamesPublished.map(g => g.name).join(", ");
    };

    trackSales(game, amount) {
        this.salesMap.set(game, amount);
        game.unitsSold = amount;
    };

};


const dev = new Developer("Jane Dev", "jane@devs.com");

const action = dev.createGame("BattleZone", "Action", "2025-01-01", "ActionGame", "High", true);
const strategy = dev.createGame("WarMap", "Strategy", "2025-02-01", "StrategyGame", "Open Map", true);

console.log("Developer games:", dev.listGames());

const pub = new Publisher("MegaPub", "contact@megapub.com");
pub.publishGame(action);
pub.publishGame(strategy);

pub.trackSales(action, 50000);
pub.trackSales(strategy, 30000);

console.log("Published games:", pub.listReleases());

console.log("Action game revenue:", action.calculateRevenue(60));
console.log("Strategy game revenue:", strategy.calculateRevenue(40));

action.patchUpdates("Fixed multiplayer bug");
action.patchUpdates("Added new weapons");
action.showPatches();

