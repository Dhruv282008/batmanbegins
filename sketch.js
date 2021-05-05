const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops, world, engine

function preload(){
    createCanvas(500,900)
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    drops = new Drop(250,250)
}

function draw(){
    background("white")
    drops.display()
}   

