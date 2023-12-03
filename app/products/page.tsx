
import React from 'react'
import {MenuCards} from '@/app/components/Cards';
import { Button } from '@/app/components/Button';
import { popularDishes } from '@/app/data';
import PageLayout from '../pageLayout/layout';


const page = () => {
  return (
		<PageLayout>
			<section className="py-4 px-4 lg:py-14 md:px-16 lg:px-16">
				<div className="flex flex-col gap-2">
					<p className="text-red-600 font-semibold">Popular Dishes</p>
					<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#030203]">
						Browse our Menu
					</h3>
				</div>
				<div className="grid md:grid-cols-3 py-4 lg:py-8 gap-6 lg:gap-8">
					{popularDishes.map((popular, index) => {
						return (
							<MenuCards
								key={index}
								image={popular.src}
								description={popular.description}
								price={popular.price}
								title={popular.title}
							/>
						);
					})}
				</div>
			</section>
		</PageLayout>
  );
}

export default page
