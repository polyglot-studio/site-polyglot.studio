<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;

class GitHubDeployController extends Controller
{
  public function deploy(Request $request) {
    $githubPayload = $request->getContent();
    $githubHash = $request->header('X-Hub-Signature');
    $localToken = config('app.deploy_secret');
    $localHash = 'sha1=' . hash_hmac('sha1', $githubPayload, $localToken, false);
    if (hash_equals($githubHash, $localHash)) {
        $root_path = base_path();
        $process = new Process('cd ' . $root_path . '; ./deploy.sh');
        /*
        $process->run(function ($type, $buffer) {
            //Log::info($buffer);
            echo $buffer;
        });
        */
        $process->start();
    }
  }
}
