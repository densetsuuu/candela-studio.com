"use client";

import {Button} from "@ui/button";
import Link from "next/link";
import React from "react";
import {ArrowDown} from "lucide-react";

export function Cta() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-8/10 sm:w-auto">
            <Button
                asChild
                className="group rounded-full p-6 hover:scale-105 transition-transform duration-300"
            >
                <Link href="#why-us" className="text-lg flex items-center gap-2">
                    Découvrir notre approche
                    <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1"/>
                </Link>
            </Button>
        </div>

    );
}
