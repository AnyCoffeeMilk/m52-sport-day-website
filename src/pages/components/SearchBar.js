import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ inputWord, placeholder, onChange }) {
    return (
        <div className="flex border my-4 px-3 py-2 rounded-lg w-full bg-slate-100">
            <SearchIcon className="mr-2 text-md" sx={{ color: "lightgray" }} />
            <input value={inputWord}
                onChange={(e) => onChange(e)}
                className="flex-grow rounded-none focus:outline-none bg-slate-100"
                placeholder={placeholder}
            />
        </div>
    )
}