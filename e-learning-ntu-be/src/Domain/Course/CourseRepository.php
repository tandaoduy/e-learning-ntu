<?php
declare(strict_types=1);
namespace App\Domain\Course;

interface CourseRepository {
    public function all(): array;
    public function create(string $id, string $title, string $description): array;
}
