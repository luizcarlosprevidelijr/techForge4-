abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();

    addFavorite(item: string): void {
        this.favorites.add(item);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        this.favorites.unshift(item); // Adiciona no início da lista
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("The Matrix");

const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("Brave New World");

console.log(movieManager.getFavorites());
console.log(bookManager.getFavorites());
