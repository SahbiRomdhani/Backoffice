<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use App\Adresse;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
      /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(UserRequest $request){
       $user = new User();
       $user->nom = $request->nom;
       $user->prenom = $request->prenom;
       $user->email = $request->email;
       $user->password = bcrypt($request->password);

       /**adresse */
        $adress = new Adresse();
        $adress->rue = $request->rue;
        $adress->ville = $request->ville;
        $adress->code = $request->code;
        $adress->pays = $request->pays;
        $adress->save();
        /**end of adresse */
        /**put id of adresse  to adresse_id field */
        $user->adresse_id =  $adress->id;
      
       $user->save();

        return $this->login($request);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        // auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        // return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user_name' => auth::user()->nom,
            'user_id' => auth::user()->id,
        ]);
    }
    public function allusers()
    {
        $users = User::orderBy('id','DESC')
        
        ->with('adresse');
        return response()->json($users);
    }
    public function deleteUser($id){
        $user = User::find($id);
        $user->delete();
        return response()->json('deleted');
    }

}