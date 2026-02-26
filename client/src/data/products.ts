import artistBrush from "../assets/Artist Brush.jpg";
import ballPeinHammerFiberHandle from "../assets/Ball Pein Hammer – Fiber Handle.jpg";
import ballPeinHammerWoodenHandle from "../assets/Ball Pein Hammer – Wooden Handle.jpg";
import barBindingPlate from "../assets/Bar Binding Plate.jpg";
import blackRubberHammer from "../assets/Black Rubber Hammer.jpg";
import blueRedChalkLinePowder from "../assets/Blue & Red Chalk Line Powder.jpg";
import blueweldwheel from "../assets/blueweldwheel.jpg";
import bluewheel from "../assets/bluewheel.jpg";
import carWashJumboSponge from "../assets/Car Wash Jumbo Sponge.jpg";
import carpenterPencil from "../assets/Carpenter Pencil.jpg";
import cautionTape from "../assets/cautiontape.jpg";
import chfGoldGurmala4x10 from "../assets/CHF Gold Gurmala 4x10.jpg";
import chfGoldGurmala5x11 from "../assets/CHF Gold Gurmala 5x11.jpg";
import clawHammerFiberHandle from "../assets/Claw Hammer – Fiber Handle.jpg";
import clawHammerWoodenHandle from "../assets/Claw Hammer – Wooden Handle.jpg";
import cocoBrushDifferentSizes from "../assets/Coco Brush (Different Sizes).jpg";
import differentColorWarningTape from "../assets/Different Color Warning Tape.jpg";
import differentCrowBars from "../assets/Different Crow Bars.jpg";
import differentHoldFasts from "../assets/Different Hold Fasts.jpg";
import differentPaintRollers from "../assets/Different Paint Rollers.jpg";
import dottedRubberGloves from "../assets/Dotted Rubber Gloves.jpg";
import doubleGasTrolley from "../assets/Double Gas Trolley.jpg";
import fiberHandlePickaxeBig from "../assets/Fiber Handle Pickaxe Big.jpg";
import fiberHandlePickaxeSmall from "../assets/Fiber Handle Pickaxe Small.jpg";
import fiberHandleShovelSquare from "../assets/Fiber Handle Shovel Square.jpg";
import fullSteelGardenRacks from "../assets/Full Steel Garden Racks.jpg";
import gardenRake12TeethBlack from "../assets/Garden Rake 12 Teeth – Black.jpg";
import gardenRake14TeethBlack from "../assets/Garden Rake 14 Teeth – Black.jpg";
import gardenRake14TeethGreen from "../assets/Garden Rake 14 Teeth – Green.jpg";
import gardenRake14TeethOrange from "../assets/Garden Rake 14 Teeth – Orange.jpg";
import gardenRake8TeethRed from "../assets/Garden Rake 8 Teeth – Red.jpg";
import goldenFlickerRustMachine from "../assets/Golden Flicker_Rust Machine.jpg";
import greentabuk from "../assets/greentabuk.jpg";
import greenweldwheel from "../assets/greenweldwheel.jpg";
import gumBootSafety from "../assets/Gum Boot (Safety Rubber Boot).jpg";
import hardGroomBrush from "../assets/Hard Groom Brush (Multiple Sizes Available).jpg";
import jerryCan from "../assets/Jerry Can.jpg";
import lineDoriBig from "../assets/Line Dori Big.jpg";
import lineDoriSmall from "../assets/Line Dori Small.jpg";
import metalBindingStrip from "../assets/Metal Binding Strip.jpg";
import mixSponge from "../assets/Mix Sponge.jpg";
import nooraBrush from "../assets/Noora Brush.jpg";
import nylonRope from "../assets/Nylon Rope.jpg";
import pakistaniBlackBrush from "../assets/Pakistani Black Brush.jpg";
import pickaxeWoodenHandle from "../assets/Pickaxe with Wooden Handle.jpg";
import pinkwheel from "../assets/pinkwheel.jpg";
import plumBob from "../assets/Plum Bob.jpg";
import ppStrings from "../assets/PP Strings.jpg";
import redWhiteWarningTape from "../assets/Red & White Warning Tape.jpg";
import rubberWheel from "../assets/Rubber Wheel.jpg";
import safetyHelmet from "../assets/Safety Helmet (3 Colors).jpg";
import siliconeGunBlueFrame from "../assets/Silicone Gun (Blue Frame).jpg";
import siliconeGunGreenYellow from "../assets/Silicone Gun (Green & Yellow).jpg";
import siliconeGunGreenFrame from "../assets/Silicone Gun (Green Frame).jpg";
import siliconeGunRedBarrel from "../assets/Silicone Gun (Red Barrel).jpg";
import siliconeGunSilverTube from "../assets/Silicone Gun (Silver Tube).jpg";
import siliconeGunYellowBarrel from "../assets/Silicone Gun (Yellow Barrel).jpg";
import siliconeGunYellowFrame from "../assets/Silicone Gun (Yellow Frame).jpg";
import singleGasTrolley from "../assets/Single Gas Trolley.jpg";
import spongeGurmala from "../assets/Sponge Gurmala.jpg";
import steelWoolBigRoll from "../assets/Steel Wool Big Roll – 10kg.jpg";
import steelWoolSmall from "../assets/Steel Wool Small.jpg";
import twoWheelTrolleyFixedType from "../assets/Two Wheel Trolley Fixed Type.jpg";
import weldingHelmet from "../assets/Welding Helmet.jpg";
import whiteRubberHammer from "../assets/White Rubber Hammer.jpg";
import woodenHandlePointedShovel from "../assets/Wooden Handle Pointed Shovel.jpg";
import woodenStick from "../assets/Wooden Stick 27mm x 4 Feet.jpg";
import xxlChfGoldTrowel from "../assets/XXL CHF Gold Brand Trowel.jpg";
import xxxlChfGoldTrowel from "../assets/XXXL CHF Gold Brand Trowel.jpg";
import yellowGloves from "../assets/Yellow Gloves.jpg";

export type Category =
  | "Material Handling"
  | "Safety"
  | "Painting & Finishing"
  | "Construction Tools"
  | "General Items"
  | "Cleaning Tools"
  | "General Hardware"
  | "Construction Equipment"
  | "Hardware & Trolley Parts"
  | "Garden Tools"
  | "Hand Tools"
  | "Safety Wear"
  | "Marking Tools"
  | "Abrasives & Finishing Materials";

export interface Product {
  id: number;
  name: string;
  category: Category;
  image: string;
  description?: string;
}

export const CATEGORIES: { id: Category; name: string }[] = [
  { id: "Material Handling", name: "Material Handling" },
  { id: "Safety", name: "Safety" },
  { id: "Painting & Finishing", name: "Painting & Finishing" },
  { id: "Construction Tools", name: "Construction Tools" },
  { id: "General Items", name: "General Items" },
  { id: "Cleaning Tools", name: "Cleaning Tools" },
  { id: "General Hardware", name: "General Hardware" },
  { id: "Construction Equipment", name: "Construction Equipment" },
  { id: "Hardware & Trolley Parts", name: "Hardware & Trolley Parts" },
  { id: "Garden Tools", name: "Garden Tools" },
  { id: "Hand Tools", name: "Hand Tools" },
  { id: "Safety Wear", name: "Safety Wear" },
  { id: "Marking Tools", name: "Marking Tools" },
  { id: "Abrasives & Finishing Materials", name: "Abrasives & Finishing Materials" },
];

export const PRODUCTS: Product[] = [
  // Material Handling
  { id: 1, name: "Blue Wheel Barrow France Model", category: "Material Handling", image: bluewheel },
  { id: 2, name: "Pink Wheel Barrow Heavy Duty", category: "Material Handling", image: pinkwheel },
  { id: 3, name: "Blue Welding Wheel Barrow", category: "Material Handling", image: blueweldwheel },
  { id: 4, name: "Green Welding Wheel Barrow", category: "Material Handling", image: greenweldwheel },
  { id: 5, name: "Single Gas Trolley", category: "Material Handling", image: singleGasTrolley },
  { id: 6, name: "Double Gas Trolley", category: "Material Handling", image: doubleGasTrolley },
  { id: 7, name: "Two Wheel Trolley Fixed Type", category: "Material Handling", image: twoWheelTrolleyFixedType },
  { id: 8, name: "Tabuk Trolley with Big Wheel", category: "Material Handling", image: greentabuk },

  // Safety
  { id: 9, name: "Yellow Gloves", category: "Safety", image: yellowGloves },
  { id: 10, name: "Dotted Rubber Gloves", category: "Safety", image: dottedRubberGloves },
  { id: 11, name: "Welding Helmet", category: "Safety", image: weldingHelmet },
  { id: 12, name: "Safety Helmet (3 Colors)", category: "Safety", image: safetyHelmet },
  { id: 13, name: "Red & White Warning Tape", category: "Safety", image: redWhiteWarningTape },
  { id: 14, name: "Different Color Warning Tape", category: "Safety", image: differentColorWarningTape },
  { id: 15, name: "Caution Tapes", category: "Safety", image: cautionTape },

  // Painting & Finishing
  { id: 16, name: "Mix Sponge", category: "Painting & Finishing", image: mixSponge },
  { id: 17, name: "Car Wash Jumbo Sponge", category: "Painting & Finishing", image: carWashJumboSponge },
  { id: 18, name: "Different Paint Rollers", category: "Painting & Finishing", image: differentPaintRollers },
  { id: 19, name: "Artist Brush", category: "Painting & Finishing", image: artistBrush },
  { id: 20, name: "Noora Brush", category: "Painting & Finishing", image: nooraBrush },
  { id: 21, name: "Coco Brush (Different Sizes)", category: "Painting & Finishing", image: cocoBrushDifferentSizes },
  { id: 22, name: "Steel Wool Small", category: "Painting & Finishing", image: steelWoolSmall },
  { id: 23, name: "Sponge Gurmala", category: "Painting & Finishing", image: spongeGurmala },
  { id: 24, name: "CHF Gold Gurmala 5x11", category: "Painting & Finishing", image: chfGoldGurmala5x11 },
  { id: 25, name: "CHF Gold Gurmala 4x10", category: "Painting & Finishing", image: chfGoldGurmala4x10 },

  // Construction Tools
  { id: 26, name: "Pickaxe with Wooden Handle", category: "Construction Tools", image: pickaxeWoodenHandle },
  { id: 27, name: "Fiber Handle Pickaxe Big", category: "Construction Tools", image: fiberHandlePickaxeBig },
  { id: 28, name: "Fiber Handle Pickaxe Small", category: "Construction Tools", image: fiberHandlePickaxeSmall },
  { id: 29, name: "Fiber Handle Shovel Square", category: "Construction Tools", image: fiberHandleShovelSquare },
  { id: 30, name: "Wooden Handle Pointed Shovel", category: "Construction Tools", image: woodenHandlePointedShovel },
  { id: 31, name: "Different Crow Bars", category: "Construction Tools", image: differentCrowBars },
  { id: 32, name: "Different Hold Fasts", category: "Construction Tools", image: differentHoldFasts },
  { id: 33, name: "Plum Bob", category: "Construction Tools", image: plumBob },
  { id: 34, name: "Bar Binding Plate", category: "Construction Tools", image: barBindingPlate },
  { id: 35, name: "Metal Binding Strip", category: "Construction Tools", image: metalBindingStrip },
  { id: 36, name: "Line Dori Big", category: "Construction Tools", image: lineDoriBig },
  { id: 37, name: "Line Dori Small", category: "Construction Tools", image: lineDoriSmall },
  { id: 38, name: "Blue & Red Chalk Line Powder", category: "Construction Tools", image: blueRedChalkLinePowder },
  { id: 39, name: "Full Steel Garden Racks", category: "Construction Tools", image: fullSteelGardenRacks },
  { id: 40, name: "XXXL CHF Gold Brand Trowel", category: "Construction Tools", image: xxxlChfGoldTrowel },
  { id: 41, name: "XXL CHF Gold Brand Trowel", category: "Construction Tools", image: xxlChfGoldTrowel },

  // General Items
  { id: 42, name: "PP Strings", category: "General Items", image: ppStrings },
  { id: 43, name: "Nylon Rope", category: "General Items", image: nylonRope },
  { id: 44, name: "Jerry Can", category: "General Items", image: jerryCan },
  { id: 45, name: "Silicone Gun (Blue Frame)", category: "General Items", image: siliconeGunBlueFrame },
  { id: 46, name: "Silicone Gun (Red Barrel)", category: "General Items", image: siliconeGunRedBarrel },
  { id: 47, name: "Silicone Gun (Silver Tube)", category: "General Items", image: siliconeGunSilverTube },
  { id: 48, name: "Silicone Gun (Green Frame)", category: "General Items", image: siliconeGunGreenFrame },
  { id: 49, name: "Silicone Gun (Yellow Barrel)", category: "General Items", image: siliconeGunYellowBarrel },
  { id: 50, name: "Silicone Gun (Yellow Frame)", category: "General Items", image: siliconeGunYellowFrame },
  { id: 51, name: "Silicone Gun (Green & Yellow)", category: "General Items", image: siliconeGunGreenYellow },

  // Cleaning Tools
  { id: 52, name: "Hard Groom Brush (Multiple Sizes Available)", category: "Cleaning Tools", image: hardGroomBrush },
  { id: 53, name: "Pakistani Black Brush", category: "Cleaning Tools", image: pakistaniBlackBrush },

  // General Hardware
  { id: 54, name: "Wooden Stick 27mm x 4 Feet", category: "General Hardware", image: woodenStick },

  // Construction Equipment
  { id: 55, name: "Golden Flicker / Rust Machine", category: "Construction Equipment", image: goldenFlickerRustMachine },

  // Hardware & Trolley Parts
  { id: 56, name: "Rubber Wheel", category: "Hardware & Trolley Parts", image: rubberWheel },

  // Garden Tools
  { id: 57, name: "Garden Rake 14 Teeth – Black", category: "Garden Tools", image: gardenRake14TeethBlack },
  { id: 58, name: "Garden Rake 12 Teeth – Black", category: "Garden Tools", image: gardenRake12TeethBlack },
  { id: 59, name: "Garden Rake 14 Teeth – Orange", category: "Garden Tools", image: gardenRake14TeethOrange },
  { id: 60, name: "Garden Rake 8 Teeth – Red", category: "Garden Tools", image: gardenRake8TeethRed },
  { id: 61, name: "Garden Rake 14 Teeth – Green", category: "Garden Tools", image: gardenRake14TeethGreen },

  // Hand Tools
  { id: 62, name: "White Rubber Hammer", category: "Hand Tools", image: whiteRubberHammer },
  { id: 63, name: "Black Rubber Hammer", category: "Hand Tools", image: blackRubberHammer },
  { id: 64, name: "Ball Pein Hammer – Fiber Handle", category: "Hand Tools", image: ballPeinHammerFiberHandle },
  { id: 65, name: "Ball Pein Hammer – Wooden Handle", category: "Hand Tools", image: ballPeinHammerWoodenHandle },
  { id: 66, name: "Claw Hammer – Wooden Handle", category: "Hand Tools", image: clawHammerWoodenHandle },
  { id: 67, name: "Claw Hammer – Fiber Handle", category: "Hand Tools", image: clawHammerFiberHandle },

  // Safety Wear
  { id: 68, name: "Gum Boot (Safety Rubber Boot)", category: "Safety Wear", image: gumBootSafety },

  // Marking Tools
  { id: 69, name: "Carpenter Pencil", category: "Marking Tools", image: carpenterPencil },

  // Abrasives & Finishing Materials
  { id: 70, name: "Steel Wool Big Roll – 10kg", category: "Abrasives & Finishing Materials", image: steelWoolBigRoll },
];
