import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import xingIcon from "../../../assets/icons/free-icon-xing.jpg";
import { TipographyIcon } from "../../icons/TipographyIcon";
import "./Header.scss";
import { SearchIcon } from "../../icons/SearchIcon";
import { CommandIcon } from "../../icons/CommandIcon";
import { KeyIcon } from "../../icons/KeyIcon";
import { QuestionIcon } from "../../icons/QuestionIcon";
import { BellIcon } from "../../icons/BellIcon";
import { Nav } from "../Nav";

export const Header = () => {
	return (
		<header className="flex flex-wrap justify-between items-center bg-white sticky top-0 z-10 shadow-lg">
			<div className="w-1/3 pl-8 h-20 flex items-center">
				<a href="#">
					<div className="header-image flex items-center w-10 h-10 relative">
						<figure className="mr-8">
							<img
								className="header-image__xing"
								src={xingIcon}
								title="Free icon xing"
								alt="Free icon xing"
							/>
						</figure>
					</div>
				</a>
				<a href="#" className="flex items-center">
					<TipographyIcon className="w-6 mx-2" />
					<p className="text-base mr-2">Teqqed</p>
					<figure className="h-full flex flex-col justify-center">
						<ChevronUpIcon className="w-5" />
						<ChevronDownIcon className="w-5" />
					</figure>
				</a>
			</div>

			<div className="w-5/12 pr-8 flex justify-between items-center">
				<div className="p-2 mr-5 flex items-center rounded-lg shadow-sm bg-slate-100">
					<SearchIcon />
					<input
						type="search"
						className="w-full px-4 text-gray-700 rounded-lg focus:outline-none bg-transparent"
						placeholder="Search"
					/>
					<button
						type="button"
						className="flex items-center justify-center relative rounded-lg bg-white border-solid h-7 w-10 px-2 py-1"
					>
						<CommandIcon className="flex-auto w-3 mr-1" />
						<KeyIcon className="flex-auto w-2" />
					</button>
				</div>
				<button type="button">
					<QuestionIcon className="w-4" />
				</button>
				<button type="button">
					<BellIcon className="w-4" />
				</button>
				<button type="button">
					<TipographyIcon className="w-8" />
				</button>
			</div>

			<Nav />

		</header>
	);
};
