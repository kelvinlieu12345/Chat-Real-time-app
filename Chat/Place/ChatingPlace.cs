using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
namespace Chat.Place
{
    public class ChatingPlace : Hub
    {
        public async Task SdMsg(string name, string msg)
        {
            await Clients.All.SendAsync("ReceiveMsg", name, msg);
        }
    }
}
