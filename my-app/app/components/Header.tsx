import Link from "next/link";
import ChatIcon from '@mui/icons-material/QuestionAnswerOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfileIcon from '@mui/icons-material/Face2Outlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export function Header() {
  return (
    <header
      className="sticky top-0 flex justify-between items-center px-6 py-3 border-b border-b-gray-600 z-50 bg-gray-800/70 backdrop-blur transition-colors duration-500"
      id="header"
    >
      <div className="flex gap-5 items-center">
        <Link
          href="/"
          className="bg-gray-300 p-1 w-8 h-8 text-center rounded-full text-xl hover:bg-blue-300"
        >
          🐕
        </Link>
        <Link href="/search" scroll={false}>
            Help
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <Link
            href=""
            className="text-gray-300 hover:text-blue-300"
            >
                <ChatIcon /> Chat
        </Link>
        <Link
            href=""
            className="text-gray-300 hover:text-blue-300"
            >
               <PermMediaOutlinedIcon/> Memory
        </Link>
        <Link
            href=""
            className="text-gray-300 hover:text-blue-300"
            >
                <ProfileIcon /> Profile
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <Link
          href="https://github.com/cindyfalencia"
          target="_blank"
        >
          <i className="text-gray-300 hover:text-blue-300">
            <GitHubIcon />
          </i>
        </Link>
        <Link
            href="https://github.com/cindyfalencia"
            className="text-gray-300 hover:text-blue-300"
            >
                <SettingsOutlinedIcon />
        </Link>
      </div>
    </header>
  );
}