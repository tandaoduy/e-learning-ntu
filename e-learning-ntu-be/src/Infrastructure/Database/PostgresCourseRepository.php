<?php
declare(strict_types=1);
namespace App\Infrastructure\Database;

use App\Domain\Course\CourseRepository;
use PDO;

final class PostgresCourseRepository implements CourseRepository {
    public function __construct(private PDO $pdo) {}
    public function all(): array {
        return $this->pdo->query('SELECT id, title, description, created_at FROM courses ORDER BY created_at DESC')->fetchAll(PDO::FETCH_ASSOC);
    }
    public function create(string $id, string $title, string $description): array {
        $query = $this->pdo->prepare('INSERT INTO courses (id, title, description) VALUES (:id, :title, :description) RETURNING id, title, description, created_at');
        $query->execute(compact('id', 'title', 'description'));
        return $query->fetch(PDO::FETCH_ASSOC);
    }
}
