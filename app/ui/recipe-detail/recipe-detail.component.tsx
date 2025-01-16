import { IRecipe } from "@/lib/model/recipe.model";
import { PrintOutlined, AccessTimeOutlined, Add } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { DM_Sans } from "next/font/google";
import Button from "@/app/ui/button/button.component";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

export default function RecipeDetail({recipe} : {recipe: IRecipe}) {
    
    return (
        <div>
            <h1 className="title text-6xl pt-8 mb-8">{recipe.title}</h1>
            <p className={`${dmSans.className} text-xl mt-36 font-light`}>
                {recipe.description}
            </p>
            <div className="flex flex-row items-center  mt-8 w-full gap-16">
                <div className="flex flex-row items-start gap-2">
                    <AccessTimeOutlined sx={{ fontSize: 48  }} />
                    <p className="normal text-xl flex flex-col items-start gap-2">
                        <span className="font-bold text-base uppercase">Prep</span>
                        <span className="font-bold text-lg">{recipe.prepTime}</span>
                    </p>
                </div>
                <p className="normal text-xl flex flex-col items-start gap-2">
                    <span className="font-bold text-base uppercase">Bake</span>
                    <span className="font-bold text-lg">{recipe.bakeTime}</span>
                </p>
                <p className="normal text-xl flex flex-col items-start gap-2">
                    <span className="font-bold text-base uppercase">Total</span>
                    <span className="font-bold text-lg">{recipe.totalTime}</span>
                </p>
            </div>
            <Divider className="w-full mt-8" />
            <div className="flex flex-row items-center  mt-8 w-full gap-16">
                <div className="flex flex-row items-start gap-2">
                    <AccessTimeOutlined sx={{ fontSize: 48  }} />
                    <p className="normal text-xl flex flex-col items-start gap-2 max-w-48">
                        <span className="font-bold text-base uppercase">Yield</span>
                        <span className="font-bold text-lg">{recipe.yield}</span>
                    </p>
                    <Button >
                        <p>
                            <Add fontSize="large"/>
                            <span className="ml-4 uppercase">Save Recipe</span>
                        </p>
                       
                    </Button>
                    <Button >
                        <p>
                            <PrintOutlined fontSize="large"/>
                            <span className="ml-4 uppercase">Print</span>
                        </p>
                    </Button>
                </div>
                
            </div>
        </div>
    );
}