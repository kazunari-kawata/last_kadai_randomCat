"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import Image from "next/image";

type CatImageProps = {
    url: string;
};

export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };
    return (
        <div>
            <button onClick={refreshImage}>他のニャンコも見る</button>
            {imageUrl && (
                <Image src={imageUrl} alt="ねこ" width={800} height={500} />
            )}
        </div>
    );
}
