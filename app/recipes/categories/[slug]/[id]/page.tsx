
import Image from 'next/image';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Divider from '@mui/material/Divider';
import { PlusOneOutlined, PrintOutlined } from "@mui/icons-material";
import MyBreadcrumbs from '@/app/ui/breadcrumbs/breadcrumb.component';
import { Button } from '@mui/material';

export default function Recipe() {
    return (
        <div className="flex flex-row items-start gap-16">
            <div className="flex flex-col items-start">
                <MyBreadcrumbs />
                <h1 className="title text-6xl pt-8 mb-8">Whole-Grain Banana Bread</h1>
                <p className="normal text-xl mt-36">
                    This one-bowl banana bread our 2018 Recipe of the Year uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious it's versatile.
                </p>
                <div className="flex flex-row items-center  mt-8 w-full gap-16">
                    <div className="flex flex-row items-start gap-2">
                        <AccessTimeOutlinedIcon sx={{ fontSize: 48  }} />
                        <p className="normal text-xl flex flex-col items-start gap-2">
                            <span className="font-bold text-base uppercase">Prep</span>
                            <span className="font-bold text-lg">10 mins</span>
                        </p>
                    </div>
                    <p className="normal text-xl flex flex-col items-start gap-2">
                        <span className="font-bold text-base uppercase">Bake</span>
                        <span className="font-bold text-lg">60 mins</span>
                    </p>
                    <p className="normal text-xl flex flex-col items-start gap-2">
                        <span className="font-bold text-base uppercase">Total</span>
                        <span className="font-bold text-lg">1 hr 10 mins</span>
                    </p>
                </div>
                <Divider className="w-full mt-8" />
                <div className="flex flex-row items-center  mt-8 w-full gap-16">
                    <div className="flex flex-row items-start gap-2">
                        <AccessTimeOutlinedIcon sx={{ fontSize: 48  }} />
                        <p className="normal text-xl flex flex-col items-start gap-2 max-w-48">
                            <span className="font-bold text-base uppercase">Yield</span>
                            <span className="font-bold text-lg">1 loaf, 12 generous servings</span>
                        </p>
                        <Button >
                            <PlusOneOutlined fontSize="medium"/>
                            <p className="ml-8">Save Recipe</p>
                        </Button>
                        <Button >
                            <PrintOutlined fontSize="medium"/>
                            <p className="ml-8">print</p>
                        </Button>
                    </div>
                    
                </div>
                
            </div>
            <Image src="/images/banana-bread.jpeg" alt="Whole-Grain Banana Bread" width={800} height={600} />
        </div>
    );
}