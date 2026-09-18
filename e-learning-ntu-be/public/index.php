<?php

declare(strict_types=1);

use App\Application\Course\CreateCourse;
use App\Infrastructure\Database\Connection;
use App\Infrastructure\Database\PostgresCourseRepository;

require dirname(__DIR__) . '/src/autoload.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

try {
    $connection = Connection::createFromEnvironment();
    $connection->migrate();
    $courses = new PostgresCourseRepository($connection->pdo());
    $method = $_SERVER['REQUEST_METHOD'];
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    if ($method === 'GET' && $path === '/health') {
        echo json_encode(['status' => 'ok']); exit;
    }
    if ($method === 'GET' && $path === '/api/v1/courses') {
        echo json_encode(['data' => $courses->all()]); exit;
    }
    if ($method === 'POST' && $path === '/api/v1/courses') {
        $payload = json_decode((string) file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
        $course = (new CreateCourse($courses))->handle((string) ($payload['title'] ?? ''), (string) ($payload['description'] ?? ''));
        http_response_code(201); echo json_encode(['data' => $course]); exit;
    }
    http_response_code(404); echo json_encode(['error' => 'Route not found']);
} catch (InvalidArgumentException $error) {
    http_response_code(422); echo json_encode(['error' => $error->getMessage()]);
} catch (Throwable $error) {
    error_log((string) $error); http_response_code(500); echo json_encode(['error' => 'Internal server error']);
}
