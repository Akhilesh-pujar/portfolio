import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typing";


const query= groq`*[_type == "social"]`

type Data={
    social:Social[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const social :Social[]= await sanityClient.fetch(query);
    res.status(200).json({social})
  }
  