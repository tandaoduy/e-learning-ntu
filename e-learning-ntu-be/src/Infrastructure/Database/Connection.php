<?php
declare(strict_types=1);
namespace App\Infrastructure\Database;

use PDO;

final class Connection {
    private function __construct(private PDO $pdo) {}
    public static function createFromEnvironment(): self {
        $host = getenv('DB_HOST') ?: '127.0.0.1'; $port = getenv('DB_PORT') ?: '5432';
        $name = getenv('DB_NAME') ?: 'elearning'; $user = getenv('DB_USER') ?: 'elearning'; $password = getenv('DB_PASSWORD') ?: '';
        return new self(new PDO("pgsql:host={$host};port={$port};dbname={$name}", $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]));
    }
    public function pdo(): PDO { return $this->pdo; }
    public function migrate(): void {
        $this->pdo->exec('CREATE TABLE IF NOT EXISTS courses (id VARCHAR(32) PRIMARY KEY, title VARCHAR(255) NOT NULL, description TEXT NOT NULL DEFAULT \'\', created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())');
    }
}
