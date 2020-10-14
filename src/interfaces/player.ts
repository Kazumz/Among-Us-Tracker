import Category from "../enums/category";

interface IPlayer {
    readonly name: string;
    readonly category: Category;
}

export default IPlayer;