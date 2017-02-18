<?php
/**
 * Created by PhpStorm.
 * User: faraway
 * Date: 17-1-20
 * Time: 下午4:06
 */


$data = [
    "topic"=>"推文推文推文推文推文推文推文推文",
    "list1"=>[
        ["title"=>"美食","subTitle"=>["擦费","asfs","assaf","safef","asdd","frevc"]],
        ["title"=>"生活服务","subTitle"=>["擦费","asfs","assaf","safef","asdd","frevc"]],
        ["title"=>"喝的","subTitle"=>["擦费","asfs","assaf","safef","asdd","frevc"]],
        ["title"=>"玩的","subTitle"=>["擦费","asfs","assaf","safef","asdd","frevc"]],
        [
            "title"=>"健身",
            "subTitle"=>[
                "擦费",
                "asfs",
                "assaf",
                "safef",
                "asdd",
                "frevc"
            ]
        ],
    ],
    "list2"=>[
        "氧气厂",
        "氧气厂",
        "氧气厂",
        "氧气厂",
        "SB驾校",
        "绅宝"
    ]
];

header("Content-type:application/json;char-set:UTF-8");
echo(json_encode($data));
?>
