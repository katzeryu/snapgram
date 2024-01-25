import Loader from "@/components/shared/Loader";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations"

const AllUsers = () => {
  const { data: creators, isPending: isUserLoading, isError: isErrorCreators} = useGetUsers();
  console.log(creators);

  return (
    <div className="flex w-full h-full">
      {isUserLoading ? <Loader/> : (creators?.documents.map((item, index) => (
        <li key={creators?.id}><img src={item.imageUrl} alt="profile picture" width={40} height={40} className="rounded-xl"/>
        <p>{item.username}</p>
        </li>
      )))}
    </div>
  )
}

export default AllUsers
