<?php

/*
 * This file is part of shriker/shadowlack-guts
 *
 * Copyright (c) 2019 Jodie Struthers.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Shriker\ShadowlackGuts;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/about', 'shadowlack-guts.page.about')
        ->route('/rules', 'shadowlack.rules')
        ->route('/anti-harassment-policy', 'shadowlack.anti-harassment-policy')
        ->route('/parents', 'shadowlack.parents')
        ->route('/rating', 'shadowlack.rating')
        ->route('/staff-handbook', 'shadowlack.staff-handbook'),
];
