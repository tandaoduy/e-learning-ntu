<?php
declare(strict_types=1);
namespace App\Application\Course;

use App\Domain\Course\CourseRepository;
use InvalidArgumentException;

final class CreateCourse {
    public function __construct(private CourseRepository $courses) {}
    public function handle(string $title, string $description): array {
        if (trim($title) === '') throw new InvalidArgumentException('Course title is required.');
        return $this->courses->create(bin2hex(random_bytes(16)), trim($title), trim($description));
    }
}
