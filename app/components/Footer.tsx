const Footer = () => {
  return (
    <div className="w-full h-full">
      {/* <div className="bg-gray-300 dark:bg-gray-700 h-[0.01rem]"></div> */}
      <div className="flex items-center h-full gap-2">
        <img
          className="w-[4rem] h-[4rem] max-sm:w-[3rem] max-sm:h-[3rem] bg-white rounded-full"
          src={"/logic-ninja-logo.png"}
        />
        <p className="text-base max-sm:text-sm">
          Copyright &copy; 2025 Logic Ninja Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
