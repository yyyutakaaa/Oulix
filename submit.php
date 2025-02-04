<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        $resultMessage = "Alle velden zijn verplicht.";
    } else {
        $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

        $entry = "Naam: $name\nE-mail: $email\nBericht: $message\nDatum: " . date('Y-m-d H:i:s') . "\n------------------------\n";

        $file = 'contact_submissions.txt';

        if (file_put_contents($file, $entry, FILE_APPEND | LOCK_EX) === false) {
            $resultMessage = "Er is een fout opgetreden bij het opslaan van je bericht.";
        } else {
            $resultMessage = "Bedankt voor je bericht!";
        }
    }
} else {
    $resultMessage = "Ongeldige aanvraag.";
}
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bericht Verzonden - Oulad Server</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background-color: #1f2937;
            color: white;
            font-family: sans-serif;
        }

        .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: url('path/to/your/background-image.jpg') center/cover no-repeat;
        }

        .message-box {
            background-color: rgba(0, 0, 0, 0.6);
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        }

        a {
            color: #fbbf24;
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container px-4">
        <div class="message-box max-w-md">
            <h1 class="text-3xl font-bold mb-4"><?php echo $resultMessage; ?></h1>
            <p class="text-lg mb-6">
                <a href="index.html" class="hover:text-amber-300 transition">Terug naar de homepagina</a>
            </p>
        </div>
    </div>
</body>

</html>