

const LinkCard = ({url,fetchUrls}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 border p-4 bg-gray-900 rounded-lg">
    <img
      src={url?.qr}
      className="h-32 object-contain ring ring-blue-500 self-start"
      alt="qr code"
    />
    </div>
  )
}

export default LinkCard
