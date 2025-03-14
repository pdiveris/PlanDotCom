<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class ApiController
{
    private ?Collection $videos;

    public function __construct()
    {
        $data = json_decode(
            file_get_contents(
                storage_path('app/private/db.json')
            )
        );

        $this->videos = collect(
          $data->videos
        );
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $q = $request->get('q', '');
        
        if ($q <> '') {
            $ret = $this->videos->filter(function ($item) use ($q) {
                return str_contains($item->title, $q);
            });
        } else {
            $ret = $this->videos;
        }

        return response()->json(
            $ret
        );
    }
}
