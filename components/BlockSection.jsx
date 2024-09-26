"use client";
import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Block from '@/components/Block';

const data = [
{
    "id": 0,
    "image": "/mag.jpg",
    "title": "MAGAZINES",
    "description": "We call ourselves 'dreamers and doers' for a reason: we can make happen not just what is possible, but what is impossible. NEOM is a unique investment opportunity, unrivalled anywhere else."
},
{
    "id": 1,
    "image": "https://images.unsplash.com/photo-1528359645462-5ff224bf906e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "BLOGS",
    "description": "Pandas are large, peaceful bears native to the mountainous forests of China, known for their distinctive black-and-white fur. They primarily eat bamboo, which makes up over 99% of their diet, though they occasionally eat other plants and small animals. Pandas are solitary animals and spend most of their time eating and resting."
},
{
    "id": 2,
    "image": "https://plus.unsplash.com/premium_photo-1664303314018-d59cbbb5b13d?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "GALLERY",
    "description": "I am ChatGPT, an AI language model created by OpenAI, designed to assist with a wide range of tasks, including answering questions, generating text, solving problems, and even engaging in creative writing"
},
{
    "id": 3,
    "image": "https://plus.unsplash.com/premium_photo-1661844581764-eb881c5a7462?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "CLUB\u00A0TALK",
    "description": "Thanos is basically the biggest boss in the Marvel Universe, no cap. Dude literally rolled up with the Infinity Gauntlet, snapped his fingers, and wiped out half the universe like it was nothing. All because he thought overpopulation was a vibe killer. He’s mad powerful, pulling off stuff no one else could, but like, super chill about it."
}];

export default function BlockSection() {
    const targetRef = useRef(null);
    const [activeBlock, setActiveBlock] = useState(0);
    const {scrollYProgress} = useScroll({target: targetRef, offset: ["start start", "end end"]});
    const activeBlockValue = useTransform(scrollYProgress, (latest) => Math.floor(latest * 4));
    useEffect(() => activeBlockValue.on("change", latest => {setActiveBlock(latest)}), [])
    return (
      <>
        <motion.div ref={targetRef} className={`min-h-[${(data.length + 1) * 100}vh]`}>
        {data.map(block => <Block key={block.id} {...block} isActive={activeBlock === block.id} />)}
        </motion.div>
      </>
    )
  }